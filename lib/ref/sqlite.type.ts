import { PathLike } from 'fs'

import { DBGeneric } from './generics.type'

/** The representation of the SQLite Adapter Options */
export interface SQLite3Options extends DBGeneric {
  file: PathLike
}