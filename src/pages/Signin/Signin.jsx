import React from 'react';
import signin from '../../actions/signin';
import Button from '../../components/Button/Button';

export default function Signin() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <video
        className="h-screen w-full object-cover fixed"
        loop="loop"
        muted="true"
        src="/video/clouds.mp4"
        autoPlay="true"
      >
        <track kind="captions" />
      </video>
      {/* <img src="/logo192.png" alt="logo" className="w-32 z-10 animate-bounce" /> */}
      <Button
        onClick={signin}
        pallete="blue"
        className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
      >
        Войти
      </Button>
    </div>
  );
}
