/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="w-full h-96 bg-fixed bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(/background.jpg)`,
        }}
      >
        <Image className="drop-shadow-md" src={'/nca.png'} alt='logo' width={140} height={140} />
        <h1 className="text-primary-2 flex-col text-3xl  lg:text-6xl font-bold">
          Welcome to 
        </h1>
        <h1 className="text-primary-1 flex text-center flex-col justify-center drop-shadow-md text-3xl  lg:text-6xl font-bold">
          NIEVE CHRISTIAN ACADEMY
        </h1>
        <h4 className="text-lg text-bold justify-center text-primary-1">School ID No. 466527</h4>
      </div>

      <div className="lg:px-20 px-5 pt-10 space-y-8">
        <h1 className="text-primary-1 text-3xl">CHRISTIAN SCHOOL K to 12 CURRICULUM</h1>
        <p className="md:text-base">
          Children who attend Christian schools have the same variety of personalities, talents, interests and abilities as children who attend public school.
          The difference between a Christian school and public school lies in the foundation of the curriculum and the way in which the
          social and emotional needs of the students are met. The mission statements and vision of Christian schools include many of the same academic standards
          and life-skill training as public schools. However, every element of the school day promotes Christ-centered learning and living.
        </p>
        <p className="md:text-base">
          The academic curriculum of Christian schools is similar in rigor and  complexity to that in public schools.
          The presentation of materials however, is integrated with the  truth of the Bible, which reaches across all content areas. Nieve Christian Academy of Digos City Inc., states,
          "We believe in a structured curriculums that ahs been filtered through the Word of God. All topics from science and geography, Edukasyon sa Pagkatao to language arts and relationship
          building are explored based on a thorough understanding of Biblical teachings". The Christian school k to 12 curriculum gives a holistic approach to learners.
        </p>
        <p className="md:text-base">
          Christian school curriculum <b>revolves around the Word of God.</b> The learners won't just learn the building block of academics,
          but how those building blocks support and uphold the ultimate truth of the Bible. <b>It teaches values,</b> it doesn't just teach academics,
          butt instills healthy morals and values in student as well. A Christ-like students who are empowered to go out into the world and make it
          a better place wit their love and compassion. It <b>encourages critical thinking</b>, this will ensure that students aren't just told what to believe
          but know why they believe what to believe. Critical thinking is one of the most essential life skills that students must develop to be successful. And lastly,
          <b>leads with grace</b>. Christians should exemplify grace and mercy in all they do, and carefully crafted Christian school curriculum will communicate
          in every area of learning. The Nieve Christian Academy will make sure that the school is an ideal place for any students to learn, regardless of religious background
          or upbringing. The Christian school curriculum will encourage every student to learn, grow and become the best person they can possibly be through the grace and love of Jesus Christ.
        </p>
        <p className="md:text-base">
          <i>"Train up a child in the way he should go: and when he is old, he will not depart from it."</i>
          <p>Proverbs 22:6 (KJV Bible)</p>
        </p>
      </div>
    </div>
  );
}
