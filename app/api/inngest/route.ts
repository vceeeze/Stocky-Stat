import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/Client";
import { sendSignUpEmail } from "@/lib/inngest/Functions";


export const {GET, POST, PUT} = serve({
    client: inngest,
    functions: [sendSignUpEmail],
});