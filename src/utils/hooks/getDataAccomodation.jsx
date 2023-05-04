import useFetch from './getData'

function useGetAccomodationData() {
  const { isLoading, data, error } = useFetch('../data/logements.json')
<<<<<<< main
=======
  console.log('error', error)
  console.log('isLoading', isLoading)
  console.log('data', data)
>>>>>>> Testing fetch from P4C2-solution from React-Intermediaire lesson
  return { isLoading, data, error }
}

export default useGetAccomodationData
