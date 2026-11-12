
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Users, Camera, ShieldCheck, MapPin } from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: "hackathon" | "community" | "university";
  categoryLabel: string;
  date: string;
}

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: "1",
      src: "/images/hackathon-award.jpg",
      title: "1st Place Award Ceremony",
      caption: "Accepting the 1st Place Trophy and Certificate for Meri AI at the CSEC ASTU Hackathon v1.0 grand finale.",
      category: "hackathon",
      categoryLabel: "Hackathon Champion",
      date: "CSEC ASTU Hackathon v1.0",
    },
    {
      id: "2",
      src: "/images/team-celebration.jpg",
      title: "Team Divas Celebration",
      caption: "Celebrating our 24-hour hackathon victory with the brilliant teammates who brought Meri AI to life.",
      category: "hackathon",
      categoryLabel: "Hackathon Teammates",
      date: "Post-Hackathon Celebration",
    },
    {
      id: "3",
      src: "/images/temkin-presenting.jpg",
      title: "Technical Presentation at ASTU",
      caption: "Delivering an engineering demo and architecture walkthrough of intelligent applications at university.",
      category: "university",
      categoryLabel: "ASTU Campus",
      date: "Tech Seminar Presentation",
    },
    {
      id: "4",
      src: "/images/astu-workshop.jpg",
      title: "CSEC Mentorship Workshop",
      caption: "Mentoring university students during a hands-on technical workshop, teaching modern Git workflows and web engineering.",
      category: "community",
      categoryLabel: "Community Mentorship",
      date: "CSEC ASTU Workshop",
    },
    {
      id: "5",
      src: "/images/temkin-portrait.jpg",
      title: "Temkin Abdulmelik",
      caption: "Professional portrait of Temkin Abdulmelik — AI & Full-Stack Developer in Adama, Ethiopia.",
      category: "university",
      categoryLabel: "Identity",
      date: "Adama, Ethiopia",
    },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="editorial-tag text-[#8A75B3]">
              PHOTO JOURNAL & MEMORIES
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Publicly Approved</span>
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
            Memories in <span className="italic text-[#8A75B3]">Focus</span> 📷
          </h2>
          <p className="text-[#5E5868] max-w-xl text-sm sm:text-base">
            Moments from university hackathons, campus presentations, and student mentorship at ASTU.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-white border border-[#D8CDEE]/60 shadow-xs">
          {[
            { id: "all", label: "All Memories" },
            { id: "hackathon", label: "Hackathons 🏆" },
            { id: "community", label: "Mentorship" },
            { id: "university", label: "Campus Life" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "text-[#5E5868] hover:text-[#1E1B24] hover:bg-[#F5F2FA]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setActivePhoto(photo)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md border border-[#D8CDEE]/50 bg-white"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#1E1B24]">
              {photo.categoryLabel}
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <h4 className="font-editorial-serif text-lg font-medium leading-tight">
                {photo.title}
              </h4>
              <p className="text-[11px] text-white/80 line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh]">
                <div className="md:col-span-8 relative min-h-[350px] md:min-h-[500px] flex items-center justify-center bg-black">
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="max-h-[85vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-3">
                    <span className="editorial-tag text-[#8A75B3]">
                      {activePhoto.categoryLabel}
                    </span>
                    <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed">
                      {activePhoto.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#5E5868]">
                      <MapPin className="w-3.5 h-3.5 text-[#8A75B3]" />
                      <span>{activePhoto.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified authentic public photograph</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
