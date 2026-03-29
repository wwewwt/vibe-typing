import { SceneRoot } from './SceneRoot'

export function AmbientCanvas() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <SceneRoot />
    </div>
  )
}
