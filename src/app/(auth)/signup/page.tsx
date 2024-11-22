"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/uis/loader";
import Image from "next/image";
import login from "../../../../public/asset/unnamed (2).webp";
import { useRouter } from "next/navigation";
import { actionSignUpUser } from "@/lib/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema, FormSchema } from "@/lib/types";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useFarmState } from "@/lib/farmerProvider";

const SignUppage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [submitError, setSubmitError] = useState("");
  const { dispatch } = useFarmState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      name: "",
      title: "consumer",
    },
  });

  const onSubmit = async ({
    email,
    password,
    location,
    name,
    title,
  }: z.infer<typeof FormSchema>) => {
    const { error } = await actionSignUpUser({
      email,
      password,
      location,
      name,
      title,
    });
    if (error) {
      setSubmitError(error);
      reset();
      return;
    }
    toast({
      title: "Success",
      description: "You are redirected to login",
    });
    dispatch({
      type: "ADD_FARMER",
      payload: {
        email: email,
        location: location,
        name: name,
        title: title,
        product: [],
      },
    });
    router.push("/login");
  };

  return (
    <section className="relative h-screen w-full px-3 flex justify-center items-center">
      <Image
        src={login}
        width={1024}
        alt="backgound image"
        loading="eager"
        className="w-full h-screen -z-10 absolute top-0 bottom-0 left-0 right-0 object-cover bg-no-repeat"
      />
      <div className="rounded-lg bg-transparent/30 text-lg backdrop-blur-md p-5 flex flex-col gap-3 w-full max-w-[600px]">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex gap-2 items-center max-w-max">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt"
              height="331.000000pt"
              viewBox="0 0 300.000000 331.000000"
              preserveAspectRatio="xMidYMid meet"
              className="h-[60px] w-[60px]"
            >
              <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
              </metadata>
              <g
                transform="translate(0.000000,331.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  className="fill-[#EAD494]"
                  d="M1624 3121 c0 -48 -5 -66 -28 -95 -45 -59 -77 -71 -186 -70 -66 1
-116 8 -165 23 -122 38 -108 44 -138 -56 -43 -140 -51 -191 -51 -308 -1 -135
26 -228 89 -314 41 -56 121 -118 189 -146 59 -25 187 -57 202 -51 10 4 -5 25
-54 73 -79 80 -115 130 -148 210 -47 116 -25 236 61 332 35 38 164 131 183
131 15 0 110 -143 139 -207 14 -32 28 -84 30 -115 l6 -58 92 0 93 0 7 78 c11
131 -23 293 -84 398 -37 64 -117 152 -181 199 -26 19 -49 35 -51 35 -2 0 -4
-27 -5 -59z m122 -84 c74 -79 118 -161 144 -268 22 -94 27 -228 8 -247 -7 -7
-31 -12 -55 -12 -48 0 -48 0 -77 97 -31 101 -136 258 -181 269 -28 7 -71 -14
-147 -72 -99 -76 -168 -197 -168 -294 0 -79 43 -180 121 -286 22 -31 39 -58
36 -60 -6 -7 -83 23 -130 50 -137 81 -207 214 -207 396 0 125 45 335 74 346 7
3 50 -4 96 -16 94 -24 198 -27 262 -8 57 17 123 82 132 131 4 21 13 37 20 37
8 0 40 -28 72 -63z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M2390 2600 c-233 -60 -394 -169 -467 -318 -38 -75 -38 -77 -38 -197
1 -101 5 -131 25 -189 26 -72 50 -98 50 -53 0 80 85 268 153 336 69 71 108 86
212 86 86 -1 94 -2 188 -47 53 -26 97 -50 97 -53 0 -3 -16 -40 -35 -82 -46
-101 -114 -193 -164 -223 -22 -14 -41 -28 -41 -31 0 -4 18 -37 40 -75 22 -38
41 -73 44 -79 2 -5 42 9 90 34 105 52 230 165 282 254 44 74 80 182 89 264 l7
63 -44 -25 c-49 -28 -123 -33 -166 -11 -29 15 -69 56 -94 96 -22 36 -64 155
-78 223 -6 31 -17 57 -23 57 -7 -1 -64 -14 -127 -30z m120 -62 c22 -84 33
-114 68 -181 59 -115 141 -166 244 -153 46 6 48 6 48 -18 0 -37 -42 -148 -81
-212 -35 -58 -172 -194 -196 -194 -7 0 -13 -3 -13 -8 0 -4 -23 -18 -51 -31
-56 -25 -54 -26 -84 31 -21 39 -19 51 15 76 54 40 180 253 180 304 0 65 -177
149 -310 149 -173 -1 -270 -79 -366 -296 -27 -59 -27 -60 -34 -30 -16 66 -11
202 10 259 53 141 187 246 405 316 50 16 104 29 122 29 30 1 33 -2 43 -41z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M378 2576 c-63 -17 -168 -59 -168 -67 0 -4 10 -10 23 -13 26 -7 54
-30 85 -70 17 -22 22 -42 22 -83 0 -79 -44 -157 -148 -261 l-83 -84 48 -51
c161 -173 302 -263 453 -289 92 -16 190 0 274 45 97 51 276 233 199 202 -104
-41 -247 -61 -334 -45 -178 31 -262 141 -276 356 l-6 91 48 6 c132 19 293 1
349 -39 18 -12 23 -7 68 68 l48 81 -21 16 c-96 71 -209 124 -303 142 -68 13
-222 10 -278 -5z m307 -41 c71 -19 196 -79 220 -106 15 -16 16 -23 5 -48 -23
-57 -36 -61 -115 -41 -75 20 -201 25 -275 11 -29 -6 -53 -19 -68 -37 -22 -25
-23 -33 -17 -98 15 -161 54 -250 141 -321 75 -62 140 -78 285 -73 65 2 119 0
119 -4 0 -13 -81 -68 -140 -96 -48 -23 -68 -26 -160 -26 -98 -1 -110 2 -180
33 -41 18 -102 53 -135 76 -61 43 -195 175 -195 192 0 5 18 27 41 48 168 163
209 310 118 426 l-29 37 32 13 c96 40 234 45 353 14z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M1393 1890 c-150 -60 -226 -243 -159 -385 34 -73 69 -110 138 -144
86 -44 170 -44 256 0 106 52 162 142 162 257 0 74 -16 121 -59 178 -77 100
-220 140 -338 94z m191 -31 c48 -13 123 -82 147 -134 25 -55 25 -156 -1 -213
-43 -95 -134 -147 -248 -140 -92 5 -152 41 -199 118 -29 48 -33 64 -33 124 0
122 62 208 180 249 27 9 114 7 154 -4z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M2230 1580 c-81 -17 -169 -69 -252 -148 -74 -71 -100 -113 -60 -97
122 48 310 62 401 30 64 -24 122 -72 156 -130 31 -52 55 -157 55 -242 l0 -61
-65 -7 c-120 -13 -245 -2 -302 26 l-51 25 -20 -41 c-12 -22 -32 -59 -46 -81
l-26 -42 63 -40 c135 -88 245 -123 388 -123 104 -1 146 8 252 48 62 24 86 43
54 43 -20 0 -78 46 -99 77 -11 18 -18 46 -18 79 0 79 45 158 148 260 l85 85
-109 108 c-160 158 -292 229 -439 236 -38 2 -90 0 -115 -5z m265 -67 c39 -16
97 -48 131 -70 78 -53 204 -178 204 -203 0 -10 -10 -27 -22 -37 -86 -69 -168
-193 -181 -273 -8 -42 5 -102 27 -133 9 -12 23 -32 32 -44 15 -21 14 -22 -13
-36 -67 -34 -206 -43 -333 -21 -91 16 -260 103 -260 135 0 28 45 84 66 82 10
-1 48 -9 84 -18 49 -13 90 -16 168 -12 160 9 173 24 160 171 -15 167 -75 269
-194 327 -54 27 -79 33 -157 37 -51 2 -109 0 -131 -6 -22 -6 -46 -8 -54 -3
-19 11 43 62 123 101 76 36 92 39 195 36 67 -3 100 -9 155 -33z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M468 1536 c-224 -113 -350 -289 -384 -538 -3 -27 -3 -48 0 -48 4 0
20 10 36 22 43 31 134 36 177 9 68 -43 133 -169 164 -319 l11 -53 36 7 c289
52 492 176 575 352 30 63 32 73 32 182 -1 91 -5 130 -23 188 -15 46 -28 72
-37 72 -9 0 -15 -9 -15 -23 0 -36 -48 -174 -81 -233 -39 -67 -96 -127 -151
-155 -52 -27 -151 -36 -215 -20 -45 12 -178 73 -197 91 -5 5 11 49 38 104 47
96 136 208 177 221 11 4 19 12 17 18 -5 19 -82 157 -88 157 -3 0 -35 -15 -72
-34z m93 -67 l20 -40 -45 -47 c-76 -80 -113 -139 -156 -244 -22 -54 -22 -58
-6 -82 37 -57 195 -116 308 -116 96 0 164 29 234 99 42 43 134 205 134 237 0
8 4 14 10 14 15 0 23 -65 18 -168 -3 -75 -10 -108 -28 -145 -50 -104 -169
-204 -313 -261 -82 -33 -207 -65 -224 -59 -6 3 -24 44 -39 91 -44 145 -92 220
-164 261 -42 23 -107 31 -153 18 -25 -7 -27 -5 -27 20 0 81 75 233 155 314 87
89 219 170 248 152 4 -2 16 -22 28 -44z"
                />
                <path
                  className="fill-[#EAD494]"
                  d="M1457 1134 c-3 -3 23 -33 57 -67 119 -118 175 -227 176 -338 0 -118
-65 -213 -208 -305 -29 -19 -56 -34 -61 -34 -14 0 -110 145 -138 207 -14 32
-28 84 -30 116 l-6 57 -92 0 -93 0 -7 -77 c-16 -192 51 -390 173 -516 41 -42
133 -117 143 -117 2 0 3 19 1 43 -4 54 31 124 76 154 65 43 199 40 342 -8 30
-10 60 -19 66 -19 11 0 53 127 75 225 16 73 16 251 0 315 -45 183 -180 305
-393 355 -72 17 -73 17 -81 9z m220 -99 c174 -78 258 -273 224 -520 -14 -100
-50 -225 -68 -232 -7 -3 -44 4 -82 16 -49 15 -96 21 -163 21 -138 -1 -193 -31
-238 -133 l-21 -48 -28 20 c-121 87 -205 273 -210 468 -2 90 6 103 65 103 49
0 48 1 78 -100 30 -105 146 -270 190 -270 42 0 173 93 226 161 44 55 79 144
80 199 0 90 -31 170 -106 277 -24 34 -44 64 -44 68 0 9 34 -2 97 -30z"
                />
              </g>
            </svg>
          </Link>
          <p className="font-bold text-4xl font-serif">Sign In</p>
        </div>
        <p>All in one collaboration and Productivity platform</p>

        <form
          className="flex flex-col gap-2 w-full h-full"
          onChange={() => {
            if (submitError) setSubmitError("");
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <>
            <input
              type="text"
              placeholder="Fullname"
              {...register("name", { required: true })}
              className="py-1 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            />
            {errors && (
              <p className="text-sm text-[#EAD494]">{errors.name?.message}</p>
            )}
            <select
              defaultValue={"consumer"}
              {...register("title", { required: true })}
              className="py-2 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            >
              <option value={"consumer"}>Consumer</option>
              <option value={"farmer"}>Farmer</option>
            </select>
            {errors && (
              <p className="text-sm text-[#EAD494]">{errors.title?.message}</p>
            )}
            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: true })}
              className="py-1 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            />
            {errors && (
              <p className="text-sm text-[#EAD494]">
                {errors.location?.message}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="py-1 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            />
            {errors && (
              <p className="text-sm text-[#EAD494]">{errors.email?.message}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="py-1 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            />
            {errors && (
              <p className="text-sm text-[#EAD494]">
                {errors.password?.message}
              </p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
              className="py-1 pl-2 rounded-md bg-[#9A8499]/20 outline-[#EAD494]"
            />
            {errors && (
              <p className="text-sm text-[#EAD494]">
                {errors.confirmPassword?.message}
              </p>
            )}
          </>
          {submitError && (
            <p className="text-sm text-[#EAD494]">{submitError}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#9A8499]/20 py-1 rounded-md hover:bg-[#9A8499]/80"
          >
            {isSubmitting ? <Loader /> : "Create Account"}
          </button>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-[#9A8499]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUppage;
