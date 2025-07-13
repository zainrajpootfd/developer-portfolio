// "use client";

// import type React from "react";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function Contact() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Get In <span className="text-purple-400">Touch</span>
//         </h2>
//         <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           I'm always open to discussing new opportunities, interesting projects,
//           or just having a chat about technology.
//         </p>
//       </motion.div>

//       <div className="grid lg:grid-cols-2 gap-12">
//         {/* Contact Information */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="space-y-8"
//         >
//           <div>
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Let's Connect
//             </h3>
//             <p className="text-gray-300 mb-8">
//               Feel free to reach out if you're looking for a developer, have a
//               question, or just want to connect.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {[
//               {
//                 icon: Mail,
//                 label: "Email",
//                 value: "zain.ali@example.com",
//                 href: "mailto:zainrajpootfd@gmail.com",
//               },
//               {
//                 icon: Phone,
//                 label: "Phone",
//                 value: "+1 (555) 123-4567",
//                 href: "tel:+15551234567",
//               },
//               {
//                 icon: MapPin,
//                 label: "Location",
//                 value: "New York, NY",
//                 href: "#",
//               },
//             ].map((contact, index) => (
//               <motion.a
//                 key={contact.label}
//                 href={contact.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                 }
//                 transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//                 whileHover={{ x: 10 }}
//                 className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
//               >
//                 <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300">
//                   <contact.icon className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">{contact.label}</p>
//                   <p className="text-white font-medium">{contact.value}</p>
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <Card className="bg-white/5 backdrop-blur-lg border-white/10">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={
//                     isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                   }
//                   transition={{ duration: 0.5, delay: 0.6 }}
//                 >
//                   <Input
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={
//                     isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                   }
//                   transition={{ duration: 0.5, delay: 0.7 }}
//                 >
//                   <Input
//                     name="email"
//                     type="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={
//                     isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                   }
//                   transition={{ duration: 0.5, delay: 0.8 }}
//                 >
//                   <Textarea
//                     name="message"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={
//                     isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                   }
//                   transition={{ duration: 0.5, delay: 0.9 }}
//                 >
//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
//                   >
//                     <Send size={18} className="mr-2" />
//                     Send Message
//                   </Button>
//                 </motion.div>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.8, delay: 1 }}
//         className="text-center mt-20 pt-8 border-t border-white/10"
//       >
//         <p className="text-gray-400">
//           © 2024 Zain Ali. Built with Next.js and Tailwind CSS.
//         </p>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "zainrajpootfd@gmail.com",
                href: "mailto:zainrajpootfd@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+92 306 6044037",
                href: "tel:+15551234567",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Pakistan",
                href: "#",
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{contact.label}</p>
                  <p className="text-white font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              <form
                action="https://formspree.io/f/movladpd"
                method="POST"
                className="space-y-6"
              >
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-20 pt-8 border-t border-white/10"
      >
        <p className="text-gray-400">
          © 2024 All Rights Reserved by Zain Codes
        </p>
      </motion.div>
    </section>
  );
}
