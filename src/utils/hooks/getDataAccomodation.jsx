import useGetData from './getData'

function useGetAccomodationData() {
  const { isLoading, data, error } = useGetData('../../data/logements.json')
  return { isLoading, data, error }
}

export default useGetAccomodationData
