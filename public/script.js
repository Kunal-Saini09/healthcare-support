// Form Submissions
console.log('home.js loaded successfully');

document.addEventListener('DOMContentLoaded', () => {
    const patientForm = document.getElementById('patient-form');
    const volunteerForm = document.getElementById('volunteer-form');
    const contactForm = document.getElementById('contact-form');

    // Attach only for forms that exist on the current page
    if (patientForm) {
        patientForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Patient form submitted');
            try {
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                console.log('Form data:', data);
                const response = await fetch('/submit-patient-support', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                console.log('Response status:', response.status);
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Server responded ${response.status}: ${text}`);
                }
                const result = await response.json();
                console.log('Response result:', result);
                alert(result.message || result.error);
                if (result.message) {
                    e.target.reset();
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please check console for details.');
            }
        });
    } else {
        console.warn('Patient form not found on this page');
    }

    if (volunteerForm) {
        volunteerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                const response = await fetch('/submit-volunteer', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Server responded ${response.status}: ${text}`);
                }
                const result = await response.json();
                alert(result.message || result.error);
                if (result.message) {
                    e.target.reset();
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please check console for details.');
            }
        });
    } else {
        console.warn('Volunteer form not found on this page');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                const response = await fetch('/submit-contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Server responded ${response.status}: ${text}`);
                }
                const result = await response.json();
                alert(result.message || result.error);
                if (result.message) {
                    e.target.reset();
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form. Please check console for details.');
            }
        });
    } else {
        console.warn('Contact form not found on this page');
    }
});

// Chatbot Logic with AI
const modal = document.getElementById('chatbot-modal');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChat = document.getElementById('send-chat');
const sessionId = 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

document.getElementById('chatbot-button').onclick = () => modal.style.display = 'block';
document.querySelector('.close').onclick = () => modal.style.display = 'none';

sendChat.onclick = async () => {
    const userMessage = chatInput.value;
    if (!userMessage.trim()) return;
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = '';

    try {
        const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage, sessionId })  // Include sessionId
        });
        const data = await response.json();
        chatMessages.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    } catch (error) {
        chatMessages.innerHTML += `<p><strong>Bot:</strong> Sorry, I'm having trouble responding right now.</p>`;
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
};
