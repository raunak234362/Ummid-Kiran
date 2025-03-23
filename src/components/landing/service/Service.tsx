import { Smile, MessageSquare, Briefcase, User, Music } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

function ServiceCard({
  icon,
  title,
  description,
  iconBgColor,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
      <div
        className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
      >
        <div className="w-6 h-6">{icon}</div>
      </div>
      <h3 className="text-blue-600 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Service() {
  const services = [
    {
      icon: <Smile className="text-blue-500" />,
      title: "Physiotherapy",
      description:
        "Specialized physical therapy to improve mobility, strength, and coordination.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <MessageSquare className="text-yellow-500" />,
      title: "Speech Therapy",
      description: "Enhancing communication skills and language development.",
      iconBgColor: "bg-yellow-100",
    },
    {
      icon: <Briefcase className="text-orange-500" />,
      title: "Occupational Therapy",
      description:
        "Developing daily living skills and functional independence.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Smile className="text-blue-500" />,
      title: "Play Therapy",
      description:
        "Therapeutic play activities for emotional and social development.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <User className="text-yellow-500" />,
      title: "Postural Therapy",
      description:
        "Improving posture and body alignment for better functionality.",
      iconBgColor: "bg-yellow-100",
    },
    {
      icon: <Music className="text-orange-500" />,
      title: "Art & Music Therapy",
      description:
        "Creative expression for emotional and cognitive development.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Music className="text-orange-500" />,
      title: "Special Education",
      description:
        "Tailored instruction and support to meet the unique needs of students with disabilities.",
      iconBgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive therapeutic services tailored to enhance the
            development and well-being of our special children
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
