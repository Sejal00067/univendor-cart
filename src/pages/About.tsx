
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">About Univendor</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're passionate about creating sustainable, comfortable, and stylish clothing 
          that makes you feel confident and look great. Our journey started with a simple 
          mission: to make premium fashion accessible to everyone.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2020, Univendor began as a small startup with a big dream: 
            to revolutionize the fashion industry by combining style, sustainability, 
            and affordability. What started in a small studio has grown into a global 
            brand trusted by thousands of customers worldwide.
          </p>
          <p className="text-muted-foreground">
            Every piece in our collection is carefully designed and crafted using 
            sustainable materials and ethical manufacturing practices. We believe 
            that great fashion shouldn't come at the cost of our planet or the 
            people who make it.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556909707-f9ae76fb4db3?w=600&h=400&fit=crop&crop=center"
            alt="Our story"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do, from design to delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Committed to eco-friendly materials and responsible manufacturing
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Premium materials and craftsmanship in every piece we create
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building connections and supporting local artisans worldwide
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Passion</h3>
              <p className="text-sm text-muted-foreground">
                Love for fashion drives us to create exceptional experiences
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind Univendor
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b5b5?w=300&h=300&fit=crop&crop=center"
            },
            {
              name: "Michael Chen",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=center"
            },
            {
              name: "Emily Rodriguez",
              role: "Sustainability Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=center"
            }
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
