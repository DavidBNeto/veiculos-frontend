import { useCallback, useState } from "react"

const usePost = () => {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const post = useCallback(
    async (data: FormData) => {
      if (loading) {
        return
      }

      setLoading(true)

      const dev = import.meta.env.DEV
      const staticURL = dev
        ? `${import.meta.env.VITE_LOCAL}/upload/pdf/`
        : `${import.meta.env.VITE_PROD}/upload/pdf/`

      await fetch(staticURL, {
        body: data,
        method: "POST",
      })
        .then((res) => setResult(res))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    },
    [loading]
  )

  return { post, result, loading, error }
}

export default usePost
