import useFetch from './getData'

function useGetAccomodationData() {
  const { isLoading, data, error } = useFetch('../../data/logements.json')
  return { isLoading, data, error }
}

export default useGetAccomodationData
