import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      //Even 컴포넌트 수행이 끝났을 때 출력됨.
      console.log("even 컴포넌트 언마운트");
    };
  }, []);

  return <div>현재 짝수 입니다.</div>;
};

export default Even;
