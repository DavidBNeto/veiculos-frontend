import { useCallback, useState } from "react"

const useGet = () => {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const get = useCallback(
    async (data: any) => {
      if (loading) {
        return
      }

      setLoading(true)

      const dev = import.meta.env.DEV
      const staticURL = dev
        ? `${import.meta.env.VITE_LOCAL}/status?ids=`
        : `${import.meta.env.VITE_PROD}/status?ids=`

      await fetch(staticURL, {
        body: data,
        method: "GET",
      })
        .then((res) => setResult(res))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    },
    [loading]
  )

  return { get, result, loading, error }
}

export default useGet
