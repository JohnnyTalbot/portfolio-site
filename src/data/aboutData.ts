import profile from '@/assets/about/profile.jpg';
import elementary from '@/assets/about/elementary.jpg';
import highschool from '@/assets/about/highschool.jpg';
import university from '@/assets/about/university.jpg';

import football from '@/assets/about/football.jpg';
import track from '@/assets/about/track.jpg';
import gym from '@/assets/about/gym.jpg';
import chess from '@/assets/about/chess.png';
import { StaticImageData } from 'next/image';

export const aboutImages = {
  profile,
  elementary,
  highschool,
  university,
  football,
  track,
  gym,
  chess,
};

export type Profile = {
  name: string;
  title: string;
  birthday: string;
  content: string;
  image: StaticImageData;
};

export type School = {
  level: string;
  school: string;
  date: string;
  image: StaticImageData;
  course?: string;
  specialization?: string;
};

export type Hobby = {
  hobby: string;
  content: string;
  image: StaticImageData;
};

export interface AboutData {
  profile: Profile[];
  school: School[];
  hobbies: Hobby[];
}


export const aboutData: AboutData = {
  profile: [
    {
      name: 'Jonathan William C. Talbot',
      title: 'Web Developer',
      birthday: 'January 24, 2000',
      content:
        'A Web Developer from the Philippines with a passion for creating unique and functional websites. I have a strong background in computer science and specialize in front-end development, but I also have experience in back-end development. I love learning new technologies and improving my skills to create better user experiences.',
      image: aboutImages.profile,
    },
  ],
  school: [
    {
      level: 'Elementary',
      school: "St. John's Institute",
      date: '2008-2013',
      image: aboutImages.elementary,
    },
    {
      level: 'High School',
      school: 'Ateneo de Manila High School',
      date: '2013-2017',
      image: aboutImages.highschool,
    },
    {
      level: 'University',
      school: 'Ateneo de Manila University',
      date: '2017-2022',
      course: 'BS Computer Science',
      specialization: 'Data Science and Analytics',
      image: aboutImages.university,
    },
  ],
  hobbies: [
    {
      hobby: 'Football',
      content:
        "My first love was football. I've played the sport ever since I was a little kid because my dad was also a professional football player back in his day. He was the one who introduced me to the sport and became my first coach and inspiration for playing the game. Football has given me so many opportunities in my life including a scholarship in high school which I will be forever grateful for.",
      image: aboutImages.football,
    },
    {
      hobby: 'Track & Field',
      content:
        "I later delved into Track & Field in my final year in high school where I won 5 medals in my rookie year. This also was a huge boost for my career as it landed me a scholarship in the Ateneo de Manila University where I also competed in Track & Field UAAP until the pandemic happened. Although I didn't enjoy it as much as football, it was a new discipline that I learned to love and appreciate.",
      image: aboutImages.track,
    },
    {
      hobby: 'Gym/Fitness',
      content:
        'Due to my athletic background, I found that even after graduating, I wanted to stay fit and healthy. I started going to the gym regularly and discovered a love for weightlifting and fitness training. It has become an essential part of my routine and has helped me maintain a balanced lifestyle.',
      image: aboutImages.gym,
    },
    {
      hobby: 'Chess',
      content:
        'A recent hobby of mine is chess which started during the pandemic. I was looking for a way to challenge myself mentally and stumbled upon online chess. It has since become a passion of mine, and I enjoy playing against friends and improving my skills.',
      image: aboutImages.chess,
    },
  ],
};

