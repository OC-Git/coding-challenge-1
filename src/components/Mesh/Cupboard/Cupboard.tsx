import { Suspense, useState } from "react";
import { Box } from "../../Elements/Basic/Box/Box";

interface Props {
  bottom: boolean;
  back: boolean;
  sidewallLeft: boolean;
  sidewallRight: boolean;
  top: boolean;
  frontDoor: boolean;
  shelf: boolean;
}

export const Cupboard = ({ bottom, back, sidewallLeft, sidewallRight, top, frontDoor, shelf }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onHandleFrontHover = () => {
    setIsHovered((prev) => !prev);
  };

  const onHandleFrontDoor = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Suspense fallback={null}>
      <Box type={"bottom"} isShown={bottom} />
      <Box type={"back"} isShown={back} />
      <Box type={"top"} isShown={top} />
      <Box type={"sidewallLeft"} isShown={sidewallLeft} />
      <Box type={"sidewallRight"} isShown={sidewallRight} />
      <Box type={"shelf"} isShown={shelf} />
      <Box
        type={"frontDoor"}
        isShown={frontDoor}
        isHovered={isHovered}
        isOpen={isOpen}
        handleFrontHover={onHandleFrontHover}
        handleFrontDoor={onHandleFrontDoor}
      />
    </Suspense>
  );
};
