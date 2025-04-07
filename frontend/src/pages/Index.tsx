import { useMemo } from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import MemberSpotlight from "../components/Members/MemberSpotlight";
import EventCard from "../components/Events/EventCard";
import CompanySlider from "../components/Home/CompanySlider";
import { Link } from "react-router-dom";
import { members, events } from "../utils/mockData";

const Index = () => {
    // Get featured member
    const featuredMember = useMemo(
        () => members.find((member) => member.featured),
        []
    );

    // Get upcoming events (limited to 3)
    const upcomingEvents = useMemo(
        () => events.filter((event) => !event.isPast).slice(0, 3),
        []
    );

    return (
        <PublicLayout>
            {/* Hero Image */}
            <img
                src="/images/hero.png"
                alt="ColorStack Logo"
                className="w-full h-1/2"
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-colorstack-blue to-colorstack-gold py-16 md:py-24">
                <div className="container-custom mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            GSU ColorStack
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                            Empowering Black and Latinx computer science
                            students at Grambling State University.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/join"
                                className="bg-white hover:bg-white/90 text-colorstack-black font-medium py-3 px-8 rounded-md transition-colors"
                            >
                                Join Us
                            </Link>
                            <Link
                                to="/about"
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Member Spotlight Section */}
            {featuredMember && (
                <section className="py-16 bg-gray-50">
                    <div className="container-custom mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-center">
                            Member Spotlight
                        </h2>
                        <MemberSpotlight
                            member={featuredMember}
                            featured={true}
                        />
                    </div>
                </section>
            )}

            {/* About Section */}
            <section className="section-padding">
                <div className="container-custom mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">
                                About Our Chapter
                            </h2>
                            <p className="text-gray-700 mb-4">
                                ColorStack at Grambling State University is
                                dedicated to increasing the number of Black and
                                Latinx students who graduate with computing
                                degrees.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Our chapter provides academic support,
                                professional development, and community building
                                for students of color in computer science and
                                related fields.
                            </p>
                            <Link
                                to="/about"
                                className="btn-primary inline-flex"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/placeholder.svg"
                                alt="ColorStack students collaborating"
                                className="rounded-lg shadow-md w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Slider */}
            <CompanySlider />

            {/* Upcoming Events */}
            <section className="section-padding">
                <div className="container-custom mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Upcoming Events</h2>
                        <Link
                            to="/events"
                            className="text-colorstack-blue hover:underline font-medium"
                        >
                            View All Events →
                        </Link>
                    </div>

                    {upcomingEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-600">
                                No upcoming events at the moment. Check back
                                soon!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="bg-colorstack-dark py-16">
                <div className="container-custom mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Ready to take your tech career to the next level? Join
                        GSU ColorStack and connect with a community of peers and
                        industry professionals.
                    </p>
                    <Link
                        to="/join"
                        className="bg-white hover:bg-white/90 text-colorstack-black font-medium py-3 px-8 rounded-md transition-colors"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
};

export default Index;
