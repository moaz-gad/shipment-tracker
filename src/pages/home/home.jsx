import { useState } from "react"
import "./home.css"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const { t } = useTranslation()

  const handleSearchNo = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div className="Home">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-6 w-100 d-flex h-100">
            <div className="shipment-container">
              <h1 className="shipment-container-title">
                {t("HomePage.title")}
              </h1>
              <form className="d-flex flex-wrap my-4">
                <div className="shipment-container-search">
                  <input
                    name="shipment"
                    onChange={handleSearchNo}
                    type="text"
                    placeholder={t("HomePage.placeholder")}
                    value={searchInput}
                  />
                </div>
                <div className="mx-2 d-flex">
                  <Link
                    className="shipment-container-button"
                    to={{
                      pathname: `/tracking-shipment/`,
                      search: `?${searchInput}`,
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
