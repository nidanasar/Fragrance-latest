// 

"use client";

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
      {/* Full Width Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="/video/oud-video.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};