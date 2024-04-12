import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { OverviewProps, SocialMediaProps } from "../interfaces/SocialMediaCard.interface";
import { socialMediaData } from "../data/socialMediaData";



type SocialMediaContextType = {
  socialMedia: SocialMediaProps[];
  setSocialMedia: React.Dispatch<React.SetStateAction<SocialMediaProps[]>>;
  overviewData: OverviewProps[];
  setOverviewData: React.Dispatch<React.SetStateAction<OverviewProps[]>>;
};

const SocialMediaContext = createContext<SocialMediaContextType>({
  socialMedia: [],
  setSocialMedia: ()=>[],
  overviewData:  [],
  setOverviewData:()=>[]
});


  // Proveedor del contexto que envolverá a los componentes
export const SocialMediaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [socialMedia, setSocialMedia] = useState<SocialMediaProps[]>(socialMediaData);
  const [overviewData, setOverviewData] = useState<OverviewProps[]>([]);

  useEffect(()=>{
  let overview = socialMedia?.map((item)=> {
  return item.overview.map((ov)=> {
    ov.id = item.socialMediaKey
    ov.icon = item.socialIcon
    ov.positive = item.positive
    return ov
  }).flat()
  }).flat()
  setOverviewData(overview)
  },[])

  return (
    <SocialMediaContext.Provider value={{ socialMedia,  overviewData, setSocialMedia, setOverviewData  }}>
      {children}
    </SocialMediaContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useSocialMedia = () => {
  const context = useContext(SocialMediaContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
};