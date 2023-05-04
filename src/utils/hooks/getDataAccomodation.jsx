import useFetch from './getData'

function useGetAccomodationData() {
  const { isLoading, data, error } = useFetch('../../data/logements.json')
  console.log('error', error)
  console.log('isLoading', isLoading)
  console.log('data', data)
  return { isLoading, data, error }
}

export default useGetAccomodationData
