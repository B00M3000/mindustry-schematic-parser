import { Block, PowerGenerator } from './mindustry/block'
import { ItemCode, ItemCost } from './mindustry/item'
/**
 * A simple representation for a mindustry schematic
 */
export default class Schematic {
  constructor(
    /**
     * The tiles that compose this schematic
     */
    public tiles: SchematicTile[],
    /**
     * These tags contain the schematic metadata (like its name and description)
     */
    public tags: Map<string, string>,
    /**
     * With of the schematic in tiles
     */
    public width: number,
    /**
     * Height of the schematic in tiles
     */
    public height: number
  ) {}

  /**
   * The name of this schematic
   *
   * Shorhand for `tags.get('name')`
   */
  get name(): string {
    return this.tags.get('name') as string
  }

  /**
   * The description of this schematic
   *
   * Shorhand for `tags.get('name')`
   */
  get description(): string | undefined {
    return this.tags.get('description')
  }

  /**
   * The amount of power this schematic can produce
   *
   * This is a separated measurement that does not interfere with `powerConsumption`
   *
   * This measurement may vary if there is an `OverdriveProjector` or an `OverdriveDome` contained in this schematic
   */
  get powerProduction(): number {
    let result = 0
    for (const tile of this.tiles) {
      result +=
        tile.block instanceof PowerGenerator ? tile.block.powerGeneration : 0
    }
    return result
  }

  /**
   * The amount of power this schematic consumes to work properly
   *
   * This is a separated measurement that does not interfere with `powerConsumption`
   *
   * This measurement may vary if there is an `OverdriveProjector` or an `OverdriveDome` contained in this schematic
   */
  get powerConsumption(): number {
    let result = 0
    for (const tile of this.tiles) {
      result += tile.block.powerConsumption
    }
    return result
  }

  /**
   * The overall power balance of this schematic
   */
  get powerBalance(): number {
    return this.powerProduction - this.powerConsumption
  }

  /**
   * The items needed to build this schematic
   */
  get requirements(): ItemCost {
    const requirements: ItemCost = {}
    for (const tile of this.tiles) {
      const { block } = tile
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req = block.requirements
      for (const key in req) {
        // console.log(block.name, req)
        const item = key as ItemCode
        const cost = req[item] as number
        const currentCost = requirements[item] ?? 0
        requirements[item] = currentCost + cost
      }
    }
    return requirements
  }
}
export class SchematicTile {
  constructor(
    /**
     * The block occupying this tile
     */
    public block: Block,
    /**
     * The x coordinate of this tile
     */
    public x: number,
    /**
     * The y coordinate of this tile
     */
    public y: number,
    /**
     * The configuration of this tile (varies according to the block), may be `undefined` or `null`
     */
    public config: unknown,
    /**
     * The rotation of this tile
     */
    public rotation: number
  ) {}
}
