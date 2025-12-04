import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { resumeService } from '../services';
import { Resume, Experience, Education, SkillCategory, Technology, Contact } from '../types';

/**
 * Hook for fetching complete resume profile
 */
export const useResume = (
  enabled: boolean = true
): UseQueryResult<Resume, Error> => {
  return useQuery({
    queryKey: ['resume'],
    queryFn: () => resumeService.getResume(),
    enabled,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching resume profile summary (name, title, bio, avatar)
 */
export const useResumeProfile = (
  enabled: boolean = true
): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['resume', 'profile'],
    queryFn: () => resumeService.getResumeProfile(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching work experience
 */
export const useExperience = (
  enabled: boolean = true
): UseQueryResult<Experience[], Error> => {
  return useQuery({
    queryKey: ['resume', 'experience'],
    queryFn: () => resumeService.getExperience(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching current/most recent experience
 */
export const useCurrentExperience = (
  enabled: boolean = true
): UseQueryResult<Experience | null, Error> => {
  return useQuery({
    queryKey: ['resume', 'experience', 'current'],
    queryFn: () => resumeService.getCurrentExperience(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching education
 */
export const useEducation = (
  enabled: boolean = true
): UseQueryResult<Education[], Error> => {
  return useQuery({
    queryKey: ['resume', 'education'],
    queryFn: () => resumeService.getEducation(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching skills by category
 */
export const useSkills = (
  enabled: boolean = true
): UseQueryResult<SkillCategory[], Error> => {
  return useQuery({
    queryKey: ['resume', 'skills'],
    queryFn: () => resumeService.getSkills(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching skills for specific category
 */
export const useSkillsByCategory = (
  category: string | undefined
): UseQueryResult<Technology[], Error> => {
  return useQuery({
    queryKey: ['resume', 'skills', category],
    queryFn: () => (category ? resumeService.getSkillsByCategory(category) : []),
    enabled: !!category,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching all technologies used in resume
 */
export const useResumeTechnologies = (
  enabled: boolean = true
): UseQueryResult<Technology[], Error> => {
  return useQuery({
    queryKey: ['resume', 'technologies'],
    queryFn: () => resumeService.getAllTechnologies(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching contact information
 */
export const useContact = (
  enabled: boolean = true
): UseQueryResult<Contact, Error> => {
  return useQuery({
    queryKey: ['resume', 'contact'],
    queryFn: () => resumeService.getContact(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching social links
 */
export const useSocialLinks = (
  enabled: boolean = true
): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['resume', 'social'],
    queryFn: () => resumeService.getSocialLinks(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching certifications
 */
export const useCertifications = (
  enabled: boolean = true
): UseQueryResult<any[], Error> => {
  return useQuery({
    queryKey: ['resume', 'certifications'],
    queryFn: () => resumeService.getCertifications(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching languages
 */
export const useLanguages = (
  enabled: boolean = true
): UseQueryResult<string[], Error> => {
  return useQuery({
    queryKey: ['resume', 'languages'],
    queryFn: () => resumeService.getLanguages(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

/**
 * Hook for fetching timeline data (years of experience, milestones)
 */
export const useTimeline = (
  enabled: boolean = true
): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['resume', 'timeline'],
    queryFn: () => resumeService.getTimeline(),
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};
