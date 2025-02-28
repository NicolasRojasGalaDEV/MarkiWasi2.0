import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className='justify-center items-center flex flex-col gap-y-5'>
        <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
          <img className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-03%2001.37.36%20-%20A%20modern,%20minimalist%20logo%20of%20a%20puma's%20face%20with%20fierce%20and%20determined%20eyes.%20The%20design%20should%20use%20sleek,%20sharp%20lines%20and%20a%20two-tone%20color%20scheme%20of%20re-XtNoPHIKyCyCgXPVa4i7ckewmlAIAT.webp" alt="" />
        </div>
      <div className='justify-center items-center flex flex-col'>
        <h1 className="text-xl font-bold mb-4">Inicia sesión en MarkiWasi</h1>
        <AuthButtonServer />
      </div>
      </div>
    </section>
  )
}
