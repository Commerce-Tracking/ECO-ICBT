import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import { useTranslation } from "react-i18next";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      {/* Header avec style moderne */}
      <div className="text-center">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
          >
            <ChevronLeftIcon className="size-5 mr-2" />
            {t("auth.back_to_home")}
          </Link>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white">
            {t("auth.create_account")}
          </h1>
          <p className="text-white/80 text-lg">
            {t("auth.create_account_description")}
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Formulaire avec style glassmorphism */}
      <form className="space-y-6">
        <div className="space-y-5">
          {/* Champs Prénom et Nom */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Prénom avec icône */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <Input
                type="text"
                placeholder={t("auth.first_name_placeholder")}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>

            {/* Nom avec icône */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <Input
                type="text"
                placeholder={t("auth.last_name_placeholder")}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Champ Email avec icône */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <Input
              type="email"
              placeholder={t("auth.email_placeholder")}
              className="pl-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-orange-400 focus:ring-orange-400"
            />
          </div>

          {/* Champ Mot de passe avec icône */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={t("auth.password_placeholder")}
              className="pl-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-orange-400 focus:ring-orange-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/60 hover:text-white transition-colors"
            >
              {showPassword ? (
                <EyeIcon className="size-5" />
              ) : (
                <EyeCloseIcon className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Checkbox avec style moderne */}
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={isChecked}
            onChange={setIsChecked}
            className="border-white/30 bg-white/10 mt-1"
          />
          <p className="text-white/80 text-sm leading-relaxed">
            {t("auth.terms_acceptance")}{" "}
            <span className="text-orange-200 hover:text-orange-100 cursor-pointer transition-colors">
              {t("auth.terms_of_use")}
            </span>{" "}
            {t("auth.and")}{" "}
            <span className="text-orange-200 hover:text-orange-100 cursor-pointer transition-colors">
              {t("auth.privacy_policy")}
            </span>
          </p>
        </div>

        {/* Bouton uni orange */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          {t("auth.create_my_account")}
        </button>
      </form>

      {/* Footer avec style moderne */}
      <div className="text-center pt-6 border-t border-white/20">
        <p className="text-white/80 text-sm">
          {t("auth.already_have_account")}{" "}
          <Link
            to="/signin"
            className="text-orange-200 hover:text-orange-100 font-semibold transition-colors"
          >
            {t("auth.sign_in_link")}
          </Link>
        </p>
      </div>
    </div>
  );
}
