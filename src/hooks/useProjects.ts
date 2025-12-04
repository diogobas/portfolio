import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { projectService } from '../services';
import { Project } from '../types';

/**
 * Hook for fetching all projects with caching
 * Uses TanStack Query for automatic caching and background refetching
 */
export const useProjects = (
  enabled: boolean = true
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.getProjects(),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
  });
};

/**
 * Hook for fetching a single project by ID
 */
export const useProjectById = (
  projectId: string | undefined
): UseQueryResult<Project | null, Error> => {
  return useQuery({
    queryKey: ['projects', projectId],
    queryFn: () => (projectId ? projectService.getProjectById(projectId) : null),
    enabled: !!projectId,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching featured projects
 */
export const useFeaturedProjects = (
  enabled: boolean = true
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: () => projectService.getFeaturedProjects(),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook for fetching projects by technology
 */
export const useProjectsByTechnology = (
  technology: string | undefined
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects', 'technology', technology],
    queryFn: () => (technology ? projectService.getProjectsByTechnology(technology) : []),
    enabled: !!technology,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook for fetching projects by tag
 */
export const useProjectsByTag = (
  tag: string | undefined
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects', 'tag', tag],
    queryFn: () => (tag ? projectService.getProjectsByTag(tag) : []),
    enabled: !!tag,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook for fetching related projects
 */
export const useRelatedProjects = (
  projectId: string | undefined,
  limit?: number
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects', 'related', projectId],
    queryFn: () => (projectId ? projectService.getRelatedProjects(projectId, limit) : []),
    enabled: !!projectId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook for searching projects
 */
export const useSearchProjects = (
  query: string | undefined
): UseQueryResult<Project[], Error> => {
  return useQuery({
    queryKey: ['projects', 'search', query],
    queryFn: () => (query ? projectService.searchProjects(query) : []),
    enabled: !!query && query.length > 0,
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 5 * 60 * 1000,
  });
};
