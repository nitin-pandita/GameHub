import useData from "./useData";
import { Platform } from "./useGame";

interface Props {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<Platform>("platforms/lists/parents");

export default usePlatform;
