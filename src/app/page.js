// app/page.js
import Layout from "./layout";
export default function Page() {
  return (
    <div>
      <div class="centered-heading">
        <h1 className="text-3xl font-bold mb-4">
          AgBizLease: Establishing fair tenant/farmer agreements one property
          at a time.
        </h1>
        <h2 className="text-xl mb-4">
          Designed to help agricultural producers establish equitable short- and
          long-run crop leases.
        </h2>
      </div>

      <div class="landing-page-picture"></div>
      <label className="block text-lg font-medium mb-2">
        AgBizLease: What and Why
      </label>
      <ul className="list-disc list-inside mb-4">
      <li className="mb-2">
          Prior to AgBizLease, farmers and tenants lacked access to an
          online tool for negotiating lease agreements based on financial data.
          We're grateful to have addressed this gap.
        </li>
        <li>
          AgBizLease aims to facilitate fair agreements between agricultural
          producers, ensuring equity in both short- and long-term crop leases.
          It provides calculations for two primary lease types: crop share
          percentage and annual cash rent payment. These calculations are based
          on the Net Present Value (NPV) of total costs borne by either the
          tenant or the landowner. In both lease types, the percentage share of
          crop return or cash rent payment is determined by the contribution to
          total costs over the lease period. In the case of a cash rent lease,
          the annual payment is calculated considering both the landowner's
          required rent and the tenant's financial capacity.
        </li>
        <li>
          AgBizLease utilizes pre-existing enterprise budgets to serve as a
          foundation for establishing fair lease agreements between tenants and
          landowners for both annual and perennial crops. These budgets contain
          various assumptions such as prices received, yields obtained, costs,
          and inflation rates, all of which are easily customizable. Once the
          appropriate budgets have been selected and adjusted, users can
          generate scenario reports using AgBizLease. Each scenario can include
          one to five individual plans, allowing for easy comparison. Below is a
          partial list of relevant scenarios:
        </li>

        <li class="ml-4">Crop-share or annual cash rent payment in crop production </li>
        <li class="ml-4">
          Livestock-shares or annual cash rent payment in livestock production
        </li>
        <li class="ml-4">
          Shares of a product or annual cash rent payment in a value added
          business
        </li>
        <li>
          AgBizLease employs economic principles such as net present value (NPV)
          to assess fair crop share or cash rent leases for both tenants and
          landowners. The projected annual net returns are discounted to their
          present value, allowing for comparison with other lease plans within
          each scenario. Each lease plan can be discounted using its own
          discount rate, as well as beginning and ending investment values
        </li>
      </ul>
      <div className="space-x-4">
        <a href="https://www.agbizlogic.com/about/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Find out more
          </button>
        </a>
        <a href="https://www.agbizlogic.com/index/">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Get started
          </button>
        </a>
      </div>
    </div>
  );
}
