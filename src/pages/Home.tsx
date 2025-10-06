import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Trophy, ArrowRight, Calendar, Bell } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Top-rated curriculum with experienced faculty members',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with 15:1 student-teacher ratio',
    },
    {
      icon: BookOpen,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms and learning resources',
    },
    {
      icon: Trophy,
      title: 'Extracurricular Activities',
      description: 'Sports, arts, music, and clubs for holistic development',
    },
  ];

  const announcements = [
    {
      icon: Bell,
      title: 'Admissions Open for 2026',
      description: 'Early bird registration now available',
      date: 'January 15, 2026',
    },
    {
      icon: Calendar,
      title: 'Annual Sports Day',
      description: 'Join us for an exciting day of competitions',
      date: 'March 20, 2026',
    },
    {
      icon: Trophy,
      title: 'Science Fair Winners',
      description: 'Congratulations to our brilliant students',
      date: 'December 10, 2025',
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-br bg-maroon text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Worldcomp Lenana Academy
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-50">
              Where Excellence Meets Innovation
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Empowering students to reach their full potential through quality education,
              character development, and a nurturing learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-maroon rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-xl transform hover:-translate-y-1"
              >
                Admission Ongoing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {/* <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-maroon transition-all"
              >
                Learn More
              </Link> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" rounded-2xl  p-8 md:p-12 ">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                <Users className="h-16 w-16 text-white" />
              </div> */}
              <div className="flex-1 justify-center align-center">
                <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-4">
                  A Message from Our Headteacher
                </h2>
                <iframe allow="fullscreen;autoplay" height="394" src="https://streamable.com/e/kslq5n?autoplay=1&muted=1" width="100%" ></iframe>
                <p className="text-gray-600 italic">
                  — Mr. Samuel Ochieng, Headteacher
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Worldcomp Lenana Academy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive educational experience that goes beyond textbooks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br bg-maroon w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Announcements
            </h2>
            <p className="text-gray-600">Stay updated with our latest news and events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className=" bg-maroon p-3 rounded-lg">
                    <announcement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-gray-500">{announcement.date}</p>
                  </div>
                </div>
                <p className="text-gray-600">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br bg-maroon text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Give your child the gift of quality education and a bright future
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-maroon rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
