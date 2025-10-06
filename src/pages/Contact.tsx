import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
// import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await emailjs.send(
      "service_e660vmn",
      "template_h9wfekb",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "YZ2VjF-2eSdcHRVwC"
    );

    console.log("SUCCESS!", response.status, response.text);

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  } catch (error) {
    console.log("FAILED...", error);
    setIsSubmitting(false);
  }
};
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Nairobi - Kenya', 'Lenana', 'P.O Box 7434 - 00200'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+25471 038-3439', '+25471 038-3439'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@worldcomplenanaacademy.edu', 'admissions@worldcomplenanaacademy.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday', '8:00 AM - 4:00 PM'],
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-br bg-maroon text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Contact Us</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for admissions, inquiries, or just to say
            hello!
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br bg-maroon w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-scale-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank you for contacting us!
                  </h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Saul Bosire"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Admission Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r bg-maroon text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d801.1332903560833!2d36.734658683033366!3d-1.302882059802104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2ske!4v1759648324199!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="School Location"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br bg-maroon rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                <p className="mb-4">
                  Experience our facilities firsthand! Schedule a campus tour and see why Worldcomp
                  Lenana Academy is the perfect choice for your child's education.
                </p>
                <ul className="space-y-2 text-blue-50">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Tour our modern classrooms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Meet our experienced faculty</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Explore our sports facilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Learn about our programs</span>
                  </li>
                </ul>
                <button className="mt-6 w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                  Schedule a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Have Questions About Admissions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our admissions team is here to help guide you through the enrollment process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254710383439"
                  className="inline-flex items-center justify-center px-6 py-3 bg-maroon text-white rounded-lg font-semibold hover:bg-maroon-100 transition-all"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:admissions@worldcomplenanaacademy.edu"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-maroon border-2 border-maroon rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Admissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
