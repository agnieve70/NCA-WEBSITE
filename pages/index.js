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
        <h1 className="text-primary-2 flex-col text-3xl  lg:text-6xl italic font-bold">
          Welcome to 
        </h1>
        <h1 className="text-primary-1 flex-col drop-shadow-md text-3xl  lg:text-6xl italic font-bold">
          NIEVE CHRISTIAN ACADEMY
        </h1>
      </div>

      <div className="px-20 pt-10 space-y-8">
        <h1 className="text-primary-1  text-3xl">Our School</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet viverra ante et tincidunt. Nullam mollis, elit consectetur
          iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed
          nibh. Nam eu eros fermentum, aliquam sem at, accumsan augue. Aenean
          lacus lorem, interdum vel fermentum sed, sodales id libero. Nullam
          vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam
          et orci at mi ultricies laoreet et eget ipsum. Aliquam luctus posuere
          efficitur. Mauris scelerisque leo malesuada tellus malesuada accumsan.
          Ut non metus velit. Vestibulum lectus nulla, ornare a nisl nec,
          pretium viverra tellus. Phasellus sit amet magna augue. Sed a diam
          pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.
        </p>
      </div>

      <div className="px-20 pt-10 space-y-8">
        <h1 className="text-primary-1 text-3xl">Mission</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet viverra ante et tincidunt. Nullam mollis, elit consectetur
          iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed
          nibh. Nam eu eros fermentum, aliquam sem at, accumsan augue. Aenean
          lacus lorem, interdum vel fermentum sed, sodales id libero. Nullam
          vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam
          et orci at mi ultricies laoreet et eget ipsum. Aliquam luctus posuere
          efficitur. Mauris scelerisque leo malesuada tellus malesuada accumsan.
          Ut non metus velit. Vestibulum lectus nulla, ornare a nisl nec,
          pretium viverra tellus. Phasellus sit amet magna augue. Sed a diam
          pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.
        </p>

        <p>
          {" "}
          Donec eros risus, porttitor eget risus vel, pulvinar hendrerit ante.
          Maecenas quis pretium metus. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nam
          rutrum, augue et sagittis aliquam, mi nisi lobortis enim, eget egestas
          sapien urna in turpis. Quisque scelerisque dolor sagittis lorem
          accumsan, at tempus odio convallis. Nulla venenatis pulvinar ipsum vel
          auctor. Praesent a enim at erat fringilla lacinia. Aenean eu ultrices
          ante.
        </p>
      </div>
    </div>
  );
}
