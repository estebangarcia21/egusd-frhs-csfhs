import { Box } from '@chakra-ui/react'

export interface BallsProps {
  size?: number
  left?: number
  top?: number
  right?: number
  bottom?: number
  opacity?: number
  bg?: string
}

export default function Balls({
  left,
  top,
  bottom,
  right,
  bg,
  opacity,
  size = 50
}: BallsProps) {
  return (
    <div>
      <Box
        pos="absolute"
        borderRadius="50%"
        opacity={opacity}
        bgImage={bg}
        width={size}
        height={size}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
      />
    </div>
  )
}
