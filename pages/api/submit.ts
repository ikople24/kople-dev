// /pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const webhookURL = 'https://primary-production-a1769.up.railway.app/webhook/contact-form' // 👈 ใช้ webhook จาก n8n
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    })

    if (!response.ok) throw new Error('Failed to send to n8n')

    return res.status(200).json({ message: 'Sent to n8n successfully' })
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}