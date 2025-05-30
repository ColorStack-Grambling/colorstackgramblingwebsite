import { Member } from "../../utils/mockData";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

interface MemberSpotlightProps {
    member: Member;
    featured: boolean;
}

const MemberSpotlight: React.FC<MemberSpotlightProps> = ({ member, featured }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-poppins">
            <motion.div 
                className="w-4/5 sm:w-3/4 md:w-1/3 max-w-[250px] md:max-w-none mx-auto md:mx-0"
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
                className="w-full md:w-2/3 text-center md:text-left"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="text-xl sm:text-2xl font-bold text-colorstack-gold mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-white font-semibold mb-2 sm:mb-4">{member.role}</p>
                <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-6">{member.bio}</p>
                
                {/* Member Achievements */}
                {member.achievements && member.achievements.length > 0 && (
                    <div className="mb-3 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Achievements</h4>
                        <ul className="list-disc list-inside text-white/90 space-y-0.5 sm:space-y-1">
                            {member.achievements.map((achievement, index) => (
                                <li key={index} className="text-xs sm:text-sm md:text-base">
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