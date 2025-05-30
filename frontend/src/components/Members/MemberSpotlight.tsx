import { Member } from "../../utils/mockData";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

interface MemberSpotlightProps {
    member: Member;
    featured: boolean;
}

const MemberSpotlight: React.FC<MemberSpotlightProps> = ({ member, featured }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 font-poppins">
            <motion.div 
                className="w-full md:w-1/3"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-colorstack-gold rounded-2xl transform rotate-3"></div>
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="relative z-10 rounded-2xl w-full h-auto object-cover aspect-square shadow-lg"
                    />
                </div>
            </motion.div>
            
            <motion.div 
                className="w-full md:w-2/3 text-left"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-colorstack-gold mb-2">{member.name}</h3>
                <p className="text-white font-semibold mb-4">{member.role}</p>
                <p className="text-white mb-6">{member.bio}</p>
                
                {/* Member Achievements */}
                {member.achievements && member.achievements.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
                        <ul className="list-disc list-inside text-white space-y-1">
                            {member.achievements.map((achievement, index) => (
                                <li key={index} className="text-white">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default MemberSpotlight;