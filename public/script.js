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

// Chatbot Logic
const faqs = {
    "symptoms": "Common symptoms include fever, cough, and fatigue. Consult a doctor for advice.",
    "vaccine": "Vaccines are available at local clinics. Check eligibility on health.gov.",
    "appointment": "Book an appointment via our portal or call 1-800-HEALTH.",
    "volunteer": "Register as a volunteer using the form above.",
    "default": "I'm sorry, I don't have an answer for that. Please contact support."
};

const modal = document.getElementById('chatbot-modal');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChat = document.getElementById('send-chat');

document.getElementById('chatbot-button').onclick = () => modal.style.display = 'block';
document.querySelector('.close').onclick = () => modal.style.display = 'none';

sendChat.onclick = () => {
    const userMessage = chatInput.value.toLowerCase();
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    let response = faqs.default;
    for (let key in faqs) {
        if (userMessage.includes(key)) {
            response = faqs[key];
            break;
        }
    }
    chatMessages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
};