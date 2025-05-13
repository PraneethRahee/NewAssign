import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Simplified queryClient for frontend-only application
// No actual API requests will be made since this is a static landing page

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  console.log(`Mock API request to ${url} with method ${method}`);
  return { success: true };
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  () =>
  async ({ queryKey }) => {
    console.log(`Mock query for ${queryKey[0]}`);
    return { data: [] } as any;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
