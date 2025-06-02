"use client"

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function RegisterPage() {
  const router = useRouter();

  return(
     <div className="relative flex min-h-screen items-center flex-col md:flex-row heroImage textstyle overflow-hidden">

  <div className="hidden md:flex flex-1 flex-col items-center justify-center p-6">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">  Choose your Support Platform</h1>
      <p className="text-xl text-white/90 mb-8">Connecting those in need with those who can help & need help</p>
    </div>
  </div>

  <div className="relative z-10 w-full md:w-1/2 lg:w-1/3 p-4 mr-6">
    <Card className="mx-auto h-1/6 rounded-xl backdrop-blur-sm bg-white/90 border border-white/20 shadow-2xl">
      <div className="space-y-3 text-center m-10">
        <Label className="text-4xl li">CMS</Label>
        <br/>
        <Label  className="text-xl text-gray-500">this site has helping needed peoples</Label >
      </div>
      <div className="m-12 text-start">
        <div className="m-8">
          <Label  className="text-2xl w-full text-center">Register</Label >
        </div>
        <Button className="my-6 p-14 w-full flex justify-start text-white shadow-lg hover:scale-[1.02] transition-transform" onClick={() => router.push("/register/registerBenificiary")}>
          <Image src="/imgs/affiliate-marketing_5067008.png" alt="Join as a Benificiary" width={80} height={80} />
          <Label className="text-xl text-gray-500 hover:text-black">Benificiary</Label>       
        </Button>
        <Button className="my-6 p-14 w-full flex justify-start text-white shadow-lg hover:scale-[1.02] transition-transform" onClick={() => router.push("register/registerMember")}>
          <Image src="/imgs/team-building_8163894.png" alt="Join as a Member" width={80} height={80} />
          <Label className="text-xl text-gray-500 hover:text-black">Member</Label>
        </Button>
      </div>
    </Card>
  </div>

  <div className="md:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
</div>
  )
}



  {/* //  return ( */}
  {/* //       <div className="flex min-h-screen items-center flex-col md:flex-row backimage textstyle"> */}
      
  //     {/* Left side - Registration Form */}
  //     <motion.div
  //       initial={{ opacity: 0, x: 0 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
  //       className="flex w-[110%] items-center h-[80%] justify-center bg-background p-8 w-2xs rounded-r-xl shadow-2xl"
  //     >
  //       <Card className="mx-auto w-full max-w-md space-y-8">
  //           <div className="space-y-3 text-center">
  //       <div className="w-full max-w-sm">
  //         <h1 className="text-2xl font-bold mb-4">Register</h1>
  //         <form onSubmit={handleRegister} className="w-full max-w-sm">
  //           <div className="mb-4">
  //             <Label htmlFor="email" className="block text-sm font-medium text-start text-gray-700">Email</Label>
  //             <Input
  //               type="email"
  //               id="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               required
  //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
  //             /> 
  //           </div>
  //           <div className="mb-4">
  //             <Label htmlFor="password" className="block text-sm font-medium text-start text-gray-700">Password</Label>
  //             <Input
  //               type="password"
  //               id="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               required
  //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
  //             />
  //           </div>
  //           <div className="mb-4">
  //             <Label htmlFor="fullName" className="block text-sm font-medium text-start text-gray-700">Full Name</Label>
  //             <Input
  //               type="text"
  //               id="fullName"
  //               value={fullName}
  //               onChange={(e) => setFullName(e.target.value)}
  //               required
  //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
  //             />
  //           </div>
  //           <div className="mb-4">
  //             <Label htmlFor="phoneNumber" className="block text-sm font-medium text-start text-gray-700">Phone Number</Label>
  //             <Input
  //               type="text"
  //               id="phoneNumber"
  //               value={phoneNumber}
  //               onChange={(e) => setPhoneNumber(e.target.value)}
  //               required
  //               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
  //             />
  //           </div>
  //           <div className="mb-4 flex items-center">
  //             <Input
  //               type="checkbox"
  //               id="agree"
  //               checked={agree}
  //               onChange={(e) => setAgree(e.target.checked)}
  //               className="h-3 w-3 mr-4"
  //             />
  //             <Label htmlFor="agree" className="text-sm font-medium text-gray-700">
  //               I agree to the terms and conditions
  //             </Label>
  //           </div>
  //           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
  //           <Button
  //             type="submit"
  //             disabled={loading}
  //             className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
  //           >
  //             {loading ? "Loading..." : "Next"}
  //           </Button>
  //         </form>
  //         <p className="mt-4 text-sm flex justify-center w-full">
  //           Already have an account?{" "}
  //           <Link href="./login" className="text-blue-500 ml-2 z-10">
  //             Login
  //           </Link>
  //         </p>
  //       </div>
  //       </div>
  //       </Card>
  //     </motion.div>
      
      
  //     {/* Right side - Image/Branding */}
  //     <div className="relative flex w-full items-center justify-center ">
  //       <motion.div
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 0.8 }}
  //         className="p-12 text-center text-black text-nowrap"
  //       >
  //         <h1 className="mb-6 text-4xl font-bold wrap text-nowrap">Welcome to Our Platform</h1>
  //         <p className="mb-8 text-lg text-nowrap">
  //           Manage your business with our powerful dashboard
  //         </p>
  //         <div className="mx-auto max-w-md">
  //           <img
  //             src="/interconnected-data-flow.png"
  //             alt="Dashboard illustration"
  //             className="mx-auto rounded-lg shadow-2xl"
  //           />
  //         </div>

  //       </motion.div>
  //       {/* </div> */}
  //         </div>
  //   </div>
  //   );

