import { Dana } from "../models/dana";
import { Wakaf } from '../models/wakaf';

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw new Error(errorMessage);
  }
}

export async function fetchWakaf(): Promise<Wakaf[]> {
  const wakafResponse = await fetchData("/api/wakaf", { method: "GET" });
  return wakafResponse.json();
}

export async function fetchDana(): Promise<Dana[]> {
  const danaResponse = await fetchData("/api/dana", { method: "GET" });
  return danaResponse.json();
}

export interface wakafInput {
  nama: string;
  paket: string;
  nominalBarang: number;
  kategori?: string;
}

export async function createWakafData(wakaf: wakafInput): Promise<Wakaf>{
    const response = await fetchData("/api/wakaf", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(wakaf), 
    });
    return response.json();
}
