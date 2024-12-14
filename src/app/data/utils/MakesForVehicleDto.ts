export interface MakeDto {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

export interface ResultsDto{

  Results: MakeDto[]
}

export default interface MakesForVehicleDto {
  Count: number
  Message: string
  SearchCriteria: string
  Results: MakeDto[]
}