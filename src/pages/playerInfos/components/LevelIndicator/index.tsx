import { LevelIndicatorContainer } from './styles'

interface LevelIndicatorProps {
  level: number
  $variant: 'isMaximized' | 'notMaximized'
}

export function LevelIndicator({ level, $variant }: LevelIndicatorProps) {
  return (
    <LevelIndicatorContainer $variant={$variant}>
      <span>{level}</span>
    </LevelIndicatorContainer>
  )
}
