import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {data: instructors = [],isLoading: loading,refetch,} = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructor");
      return res.json();
    },
  });
  return [instructors, loading, refetch];
};

export default useInstructor;
