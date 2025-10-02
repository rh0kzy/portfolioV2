'use client';

import { useEffect, useState } from 'react';
import { database } from '../../../lib/firebase';
import { ref, onValue, update } from 'firebase/database';

interface FirebaseMessage {
  name: string;
  message: string;
  timestamp: number;
  read: boolean;
}

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: number;
  read: boolean;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesList: Message[] = Object.entries(data).map(([id, msg]) => ({
          id,
          ...(msg as FirebaseMessage)
        })).sort((a, b) => b.timestamp - a.timestamp);
        setMessages(messagesList);
      } else {
        setMessages([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (messageId: string) => {
    try {
      const messageRef = ref(database, `messages/${messageId}`);
      await update(messageRef, { read: true });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.read;
    if (filter === 'read') return msg.read;
    return true;
  });

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #4a90e2',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Admin Dashboard</h1>
          <p style={{ color: '#ccc' }}>Loading messages...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      fontFamily: 'Arial, sans-serif',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #4a90e2, #9b59b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '5px'
            }}>
              Admin Dashboard
            </h1>
            <p style={{ color: '#ccc', margin: 0 }}>Manage contact form messages</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', color: '#ccc' }}>Total Messages</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{messages.length}</div>
            </div>
            <div style={{
              background: 'rgba(255, 193, 7, 0.1)',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
              <div style={{ fontSize: '12px', color: '#ffc107' }}>Unread</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
                {messages.filter(m => !m.read).length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        {/* Filters */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <label style={{ fontWeight: 'bold', color: 'white' }}>Filter Messages:</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'all' | 'unread' | 'read')}
                style={{
                  background: '#333',
                  color: 'white',
                  border: '1px solid #555',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '14px'
                }}
              >
                <option value="all">All Messages ({messages.length})</option>
                <option value="unread">Unread Only ({messages.filter(m => !m.read).length})</option>
                <option value="read">Read Only ({messages.filter(m => m.read).length})</option>
              </select>
            </div>
            <div style={{ fontSize: '14px', color: '#ccc' }}>
              Last updated: {messages.length > 0 ? formatDate(messages[0].timestamp) : 'Never'}
            </div>
          </div>
        </div>

        {/* Messages */}
        {filteredMessages.length === 0 ? (
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '60px 30px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📭</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No messages found</h3>
            <p style={{ color: '#ccc' }}>Messages will appear here when visitors contact you.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '20px' }}>
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  background: msg.read ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 193, 7, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${msg.read ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 193, 7, 0.3)'}`,
                  borderRadius: '15px',
                  padding: '25px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>{msg.name}</h3>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        background: msg.read ? 'rgba(40, 167, 69, 0.2)' : 'rgba(255, 193, 7, 0.2)',
                        color: msg.read ? '#28a745' : '#ffc107',
                        border: `1px solid ${msg.read ? 'rgba(40, 167, 69, 0.3)' : 'rgba(255, 193, 7, 0.3)'}`
                      }}>
                        {msg.read ? 'Read' : 'Unread'}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#ccc', margin: 0 }}>{formatDate(msg.timestamp)}</p>
                  </div>
                  {!msg.read && (
                    <button
                      onClick={() => markAsRead(msg.id)}
                      style={{
                        background: 'linear-gradient(45deg, #4a90e2, #357abd)',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span>✓</span>
                      Mark Read
                    </button>
                  )}
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: '15px'
                }}>
                  <p style={{ margin: 0, lineHeight: '1.6', whiteSpace: 'pre-wrap', color: '#e0e0e0' }}>
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Footer */}
        {messages.length > 0 && (
          <div style={{
            marginTop: '50px',
            background: 'linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(155, 89, 182, 0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(74, 144, 226, 0.2)',
            borderRadius: '15px',
            padding: '30px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              📊 Message Statistics
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#4a90e2' }}>{messages.length}</div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>Total Messages</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffc107' }}>{messages.filter(m => !m.read).length}</div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>Unread Messages</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#28a745' }}>{messages.filter(m => m.read).length}</div>
                <div style={{ fontSize: '14px', color: '#ccc' }}>Read Messages</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}