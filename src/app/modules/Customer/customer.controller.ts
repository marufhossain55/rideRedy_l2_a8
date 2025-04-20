import { Bike } from '@prisma/client';
import prisma from '../../../utils/prisma';

const CreateBike = async (bikeData: Bike) => {
  const isCustomerExist = await prisma.customer.findUnique({
    where: {
      customerId: bikeData.customerId,
    },
  });

  if (!isCustomerExist) {
    throw new Error('Customer Not Found.');
  }

  const result = await prisma.bike.create({
    data: bikeData,
  });

  return result;
};

const GetAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const GetBikeById = async (bikeId: string) => {
  const isExist = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  if (!isExist) {
    throw new Error('Bike Not Found.');
  }
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};

export const BikeServices = {
  CreateBike,
  GetAllBike,
  GetBikeById,
};
