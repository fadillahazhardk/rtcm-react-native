const rtcm = require("./src/index.ts");

// const buffer: Buffer = Buffer.from("BEU3MnIQZTMxODhlOTAwZTEyNTFkNPC72dMAnUXQADd7jWIAIDgAAAAAAAAAIABAgP/7/FO4AGunsbvzuBKgQvmWB4rteUqHoleUN5E1txOpGUyh5YrWR3NkyIZfef54m/4vMn5tQX6hNoT5IoS4lwT2BwUhvHlgPHk2WHls3PmOJQEgSBJgASBIEmAA4DgOYAAEo2ZcNm0HW1Y15Jc6UPMfwP9jHu593pJ7KHhO8JzvRB7G3Zi6wwBXyA7TAdRGcAA3erKiACACxISgIwAAACCCAIDznOc3ve97eXh4eHlQSUlQeHsAAAAAAAVcwzHXDYHyhH8SiZFwQJr90AZ/20Cl/j/poC2A+v78CxJdFiC+wha163zuXCTm4jNhoTChszR679YOyLLudu44it/wzhMw6zGOeX3ovJ6j8Tw/o4AKN5dzqvnLAex8tcesPJ4S+rKPgzf4ok+TjN/qHb5s3GTN5db5Ed9Q2/X0j3rlCXxoCCr/CK/K+yDm+bNd+fUgDYXYDGYSDPJS/BbV+2lz++JH+RLq+BLr+NDT+1Et+fPL+kBO+s+1DzgSDkU0DkRbDtcR8sWP8iD58gbU8mpR/y7b/vDq/x37/szv+AS+9xWN90ma975+/m6l/S+s/YmC/kMEAgCAIAkCQJAkCQJAkCQJAkCAJPY9T1PUCQJAkCQJAkCQJAkCAIAkCQJAkCQJAgCAJAAAAAAE5TxK9O1TTs+1Zdlc0fQVBylJUDyTNMb4ll+kYlZtgWNaty4ZjVzXFdOD3HFk3z1JImDDqoYqAcALRA7QXqESIhTIxA7kG+AEX/qf4594AVACpYVRBewIIBBYJA5VXbj7VXb+H9xElIj5EuBw4R6CWwSbDypAnIVw9eAMPdzTAENGcAA3erKgACAAAAAAACAAACCAAID6iBafawwHAMPIjHrQnUgC33MC92ODF34C2lIBAEAQBAP5AsWwF2eOyJ1ifBuAxVR1");

// let message: RtcmMessage; // Decoded message
// let length: number; // Length of decoded message in bytes
// [message, length] = RtcmTransport.decode(buffer);

// console.log(message)

RtcmMessagePhysicalReferenceStationPosition.construct({
 nonPhysicalReferenceStationId: 1,
 physicalReferenceStationId: 0,
 itrfEpochYear: 0,
 arpEcefX: 37927650000,
 arpEcefY: -4160650000,
 arpEcefZ: 50938770000
})