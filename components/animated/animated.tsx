import { animated, useSpring } from '@react-spring/web'

type Props = {
  isOpenModal: boolean;
  children: React.ReactNode;
};

export const AnimatedDiv: React.FC<Props> = ({ isOpenModal, children }) => {
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: isOpenModal ? 1 : 0,
    transform: isOpenModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  console.log('changeAnimation', isOpenModal);

  return (
    <animated.div style={animation}>
      {children}
    </animated.div>
  )
}
