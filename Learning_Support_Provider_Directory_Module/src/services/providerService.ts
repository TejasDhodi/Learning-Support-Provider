import providersData from '../data/providers.json';

export type Provider ={
  id: string;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  contactEmail: string;
  phoneNumber: string;
  experience: string;
  certifications: string[];
}

const simulateDelay = (ms: number = 800) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const providerService = {
  async getAllProviders(): Promise<Provider[]> {
    await simulateDelay();
    return providersData as Provider[];
  },

  async getProviderById(id: string): Promise<Provider | null> {
    await simulateDelay();
    const provider = providersData.find(p => p.id === id);
    return provider as Provider || null;
  },

  async searchProviders(query: string): Promise<Provider[]> {
    await simulateDelay(400);
    const lowercaseQuery = query.toLowerCase();
    return providersData.filter(provider => 
      provider.name.toLowerCase().includes(lowercaseQuery) ||
      provider.specialization.toLowerCase().includes(lowercaseQuery) ||
      provider.location.toLowerCase().includes(lowercaseQuery)
    ) as Provider[];
  }
};