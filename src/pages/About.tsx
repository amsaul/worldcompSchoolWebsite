import { Target, Eye, Heart, BookOpen, Users, Lightbulb, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical behavior',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of education',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive and inclusive learning environment',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative thinking and modern teaching methods',
    },
  ];

  const staff = [
    {
      name: 'Dr. lorem Ipsum',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Lorem Ipsum',
      position: 'Vice Principal',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Erick Obaye',
      position: 'Head of Academics',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Mr. Lorem Ipsum',
      position: 'Sports Coordinator',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ms. Lorem Ipsum',
      position: 'Art & Music Director',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Lorem Ipsum',
      position: 'Science Department Head',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const activities = [
    'Sports & Athletics',
    'Music & Dance',
    'Art & Drama',
    'Science Club',
    'Coding & Robotics',
    'Debate Club',
    'Chess Club',
    'Community Service',
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-maroon text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About Us</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto">
            Discover our journey, values, and commitment to educational excellence
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2024, Worldcomp Lenana Academy has been at the forefront of educational
                excellence for over 2 years. What started as a community based school with over
                200 students from diverse backgrounds.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous innovation, dedication to student
                success, and a commitment to creating a nurturing environment where every child
                can discover their unique potential and pursue their dreams.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly stand as one of the region's most respected educational
                institutions, recognized for our academic achievements, holistic approach to
                education, and the success stories of our alumni who are making positive
                contributions to society worldwide.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-maroon text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">2+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-bg-maroon-500">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br bg-maroon p-3 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide a world-class education that empowers students with knowledge, skills,
                and values necessary to become responsible global citizens. We are committed to
                fostering critical thinking, creativity, and a lifelong love of learning in a
                safe and supportive environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-bg-maroon">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br bg-maroon p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution recognized for academic excellence,
                innovation in teaching, and the holistic development of students. We envision a
                future where our graduates are confident, compassionate leaders who make positive
                contributions to their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our school culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className=" bg-maroon w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-800 mb-4">
              Academic Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our curriculum combines traditional values with modern teaching methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br bg-maroon p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Our Curriculum</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Comprehensive academic program aligned with national standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>STEM-focused learning with hands-on experiments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Language arts and multilingual education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Social studies and global citizenship programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Technology integration in all subjects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br bg-maroon p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">
                  Extracurricular Activities
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-blue-100"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to your child's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-maroon font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br bg-maroon text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Family</h2>
          <p className="text-xl mb-8 text-maroon-50">
            Experience the difference of a school that truly cares about your child's future
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-maroon rounded-lg font-semibold hover:bg-blue-50 transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
