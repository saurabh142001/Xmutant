"use client"
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Collection } from "mongodb";

export const ContainerScroll = ({
  users,
  titleComponent,
}: {
  users?: {
    collection: string;
    name: string;
    
    image: string;
    category?: string;
  }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Dummy users
  const dummyUsers = [
    {
      name: "John Doe",
     
      image: "https://via.placeholder.com/150",
      category: "Art",
      collection: "Valyria"
    },
    {
      name: "Jane Smith",
      collection: "UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
     collection: "Product Manager",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div
      className="h-[70rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        {users && users.length > 0 ? (
          <Card
            rotate={rotate}
            translate={translate}
            scale={scale}
            users={users}
          />
        ) : (
          <div>No users found.</div>
        )}
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
collection: string;
    image: string;
    category?: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">
        {users.map((user, idx: number) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
              {user.category}
            </div>
            <img
              src={user.image}
              className="rounded-tr-md rounded-tl-md text-sm "
              alt="thumbnail"
            />
            <div className="p-4">
            <h2 className=" text-gray-500  font-semibold   text-sm">{user.collection}</h2>
              <h3 className="  text-xs text-gray-500">{user.name}</h3>
             
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};